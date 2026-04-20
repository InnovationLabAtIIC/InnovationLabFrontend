import { NextRequest } from "next/server";

import {
  ensureBackendBaseUrl,
  forwardedHeaders,
  getRequestId,
  handleUnknownError,
  parseJsonBodyAs,
  parseOptionalInt,
  relay,
  failure,
} from "@/lib/bff/common";
import { nodeApi } from "@/lib/services/server-api";
import type { PostContactDto } from "@/lib/services/generated/node/schemas";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Context = {
  params: Promise<{ segments?: string[] }>;
};

export async function GET(request: NextRequest, context: Context) {
  const requestId = getRequestId(request);
  const envError = ensureBackendBaseUrl(requestId);
  if (envError) {
    return envError;
  }

  const segments = (await context.params).segments ?? [];

  try {
    if (segments.length === 0) {
      const page = parseOptionalInt(
        request.nextUrl.searchParams.get("page"),
        "page",
        requestId,
      );
      if (page.error) {
        return page.error;
      }

      const limit = parseOptionalInt(
        request.nextUrl.searchParams.get("limit"),
        "limit",
        requestId,
      );
      if (limit.error) {
        return limit.error;
      }

      return relay(
        await nodeApi.getApiV1Contacts(
          {
            page: page.value,
            limit: limit.value,
          },
          { headers: forwardedHeaders(request) },
        ),
        requestId,
      );
    }

    return failure(
      { code: "NOT_FOUND", message: "Route not found." },
      404,
      requestId,
    );
  } catch (error) {
    return handleUnknownError(error, requestId);
  }
}

export async function POST(request: NextRequest, context: Context) {
  const requestId = getRequestId(request);
  const envError = ensureBackendBaseUrl(requestId);
  if (envError) {
    return envError;
  }

  const segments = (await context.params).segments ?? [];

  try {
    if (segments.length === 0) {
      const parsed = await parseJsonBodyAs<PostContactDto>(request);
      if (parsed.error || !parsed.value) {
        return parsed.error;
      }

      return relay(
        await nodeApi.postApiV1Contacts(parsed.value, {
          headers: forwardedHeaders(request),
        }),
        requestId,
      );
    }

    return failure(
      { code: "NOT_FOUND", message: "Route not found." },
      404,
      requestId,
    );
  } catch (error) {
    return handleUnknownError(error, requestId);
  }
}
