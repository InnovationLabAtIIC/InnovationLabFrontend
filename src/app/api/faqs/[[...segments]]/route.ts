import { NextRequest } from "next/server";

import {
  ensureBackendBaseUrl,
  forwardedHeaders,
  getRequestId,
  handleUnknownError,
  parseJsonBodyAs,
  parseOptionalInt,
  parseUuid,
  relay,
  failure,
} from "@/lib/bff/common";
import { nodeApi } from "@/lib/services/server-api";
import type {
  CreateFaqDto,
  GetApiV1FaqsParams,
  UpdateFaqDto,
} from "@/lib/services/generated/node/schemas";

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
  const headers = forwardedHeaders(request);

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
        await nodeApi.getApiV1Faqs(
          buildGetFaqParams(request, page.value, limit.value),
          { headers },
        ),
        requestId,
      );
    }

    if (segments.length === 1) {
      const idError = parseUuid(segments[0], "id", requestId);
      if (idError) {
        return idError;
      }

      return relay(
        await nodeApi.getApiV1FaqsId(segments[0], { headers }),
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
      const parsed = await parseJsonBodyAs<CreateFaqDto>(request);
      if (parsed.error || !parsed.value) {
        return parsed.error;
      }

      return relay(
        await nodeApi.postApiV1Faqs(parsed.value, {
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

export async function PUT(request: NextRequest, context: Context) {
  const requestId = getRequestId(request);
  const envError = ensureBackendBaseUrl(requestId);
  if (envError) {
    return envError;
  }

  const segments = (await context.params).segments ?? [];

  try {
    if (segments.length === 1) {
      const idError = parseUuid(segments[0], "id", requestId);
      if (idError) {
        return idError;
      }

      const parsed = await parseJsonBodyAs<UpdateFaqDto>(request);
      if (parsed.error || !parsed.value) {
        return parsed.error;
      }

      return relay(
        await nodeApi.putApiV1FaqsId(segments[0], parsed.value, {
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

function buildGetFaqParams(
  request: NextRequest,
  page?: number,
  limit?: number,
): GetApiV1FaqsParams {
  return {
    category: request.nextUrl.searchParams.get("category") ?? undefined,
    page,
    limit,
    sort_by: request.nextUrl.searchParams.get("sort_by") ?? undefined,
    sort_order: request.nextUrl.searchParams.get("sort_order") ?? undefined,
  };
}

export async function DELETE(request: NextRequest, context: Context) {
  const requestId = getRequestId(request);
  const envError = ensureBackendBaseUrl(requestId);
  if (envError) {
    return envError;
  }

  const segments = (await context.params).segments ?? [];

  try {
    if (segments.length === 1) {
      const idError = parseUuid(segments[0], "id", requestId);
      if (idError) {
        return idError;
      }

      return relay(
        await nodeApi.deleteApiV1FaqsId(segments[0], {
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
