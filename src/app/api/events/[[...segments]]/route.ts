import { NextRequest } from "next/server";

import {
  ensureBackendBaseUrl,
  forwardedHeaders,
  getRequestId,
  handleUnknownError,
  parseEnumValue,
  parseJsonBodyAs,
  parseMultipartBodyAs,
  parseOptionalInt,
  parseUuid,
  relay,
  failure,
} from "@/lib/bff/common";
import { nodeApi } from "@/lib/services/server-api";
import {
  type EventRegistrationDto,
  EventRegistrationStatus,
  EventSortBy,
  EventStatus,
  SortOrder,
  type CreateEventAgendaDto,
  type CreateEventBody,
  type GetEventRegistrationsParams,
  type GetEventsParams,
  type UpdateEventAgendaDto,
  type UpdateEventBody,
  type UpdateEventRegistrationDto,
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
        await nodeApi.getEvents(
          buildGetEventsParams(request, page.value, limit.value),
          {
            headers,
          },
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
        await nodeApi.getEventById(segments[0], { headers }),
        requestId,
      );
    }

    if (segments.length === 2 && segments[1] === "agenda") {
      const idError = parseUuid(segments[0], "id", requestId);
      if (idError) {
        return idError;
      }

      return relay(
        await nodeApi.getEventAgenda(segments[0], { headers }),
        requestId,
      );
    }

    if (segments.length === 2 && segments[1] === "registrations") {
      const idError = parseUuid(segments[0], "id", requestId);
      if (idError) {
        return idError;
      }

      const page = parseOptionalInt(
        request.nextUrl.searchParams.get("page") ??
          request.nextUrl.searchParams.get("Page"),
        "page",
        requestId,
      );
      if (page.error) {
        return page.error;
      }

      const limit = parseOptionalInt(
        request.nextUrl.searchParams.get("limit") ??
          request.nextUrl.searchParams.get("Limit"),
        "limit",
        requestId,
      );
      if (limit.error) {
        return limit.error;
      }

      return relay(
        await nodeApi.getEventRegistrations(
          segments[0],
          buildGetEventRegistrationsParams(request, page.value, limit.value),
          { headers },
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
  const headers = forwardedHeaders(request);

  try {
    if (segments.length === 0) {
      const parsed = await parseMultipartBodyAs<CreateEventBody>(request);
      if (parsed.error || !parsed.value) {
        return parsed.error;
      }

      return relay(
        await nodeApi.createEvent(parsed.value, { headers }),
        requestId,
      );
    }

    if (segments.length === 2 && segments[1] === "agenda") {
      const idError = parseUuid(segments[0], "id", requestId);
      if (idError) {
        return idError;
      }

      const parsed = await parseJsonBodyAs<CreateEventAgendaDto>(request);
      if (parsed.error || !parsed.value) {
        return parsed.error;
      }

      return relay(
        await nodeApi.createEventAgenda(segments[0], parsed.value, {
          headers,
        }),
        requestId,
      );
    }

    if (segments.length === 2 && segments[1] === "register") {
      const idError = parseUuid(segments[0], "id", requestId);
      if (idError) {
        return idError;
      }

      const parsed = await parseJsonBodyAs<EventRegistrationDto>(request);
      if (parsed.error || !parsed.value) {
        return parsed.error;
      }

      return relay(
        await nodeApi.registerForEvent(segments[0], parsed.value, {
          headers,
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
  const headers = forwardedHeaders(request);

  try {
    if (segments.length === 1) {
      const idError = parseUuid(segments[0], "id", requestId);
      if (idError) {
        return idError;
      }

      const parsed = await parseMultipartBodyAs<UpdateEventBody>(request);
      if (parsed.error || !parsed.value) {
        return parsed.error;
      }

      return relay(
        await nodeApi.updateEvent(segments[0], parsed.value, {
          headers,
        }),
        requestId,
      );
    }

    if (segments.length === 2 && segments[0] === "agenda") {
      const agendaIdError = parseUuid(segments[1], "agendaId", requestId);
      if (agendaIdError) {
        return agendaIdError;
      }

      const parsed = await parseJsonBodyAs<UpdateEventAgendaDto>(request);
      if (parsed.error || !parsed.value) {
        return parsed.error;
      }

      return relay(
        await nodeApi.updateEventAgenda(segments[1], parsed.value, {
          headers,
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

export async function PATCH(request: NextRequest, context: Context) {
  const requestId = getRequestId(request);
  const envError = ensureBackendBaseUrl(requestId);
  if (envError) {
    return envError;
  }

  const segments = (await context.params).segments ?? [];

  try {
    if (
      segments.length === 3 &&
      segments[0] === "registrations" &&
      segments[2] === "status"
    ) {
      const registrationIdError = parseUuid(
        segments[1],
        "registrationId",
        requestId,
      );
      if (registrationIdError) {
        return registrationIdError;
      }

      const parsed = await parseJsonBodyAs<UpdateEventRegistrationDto>(request);
      if (parsed.error || !parsed.value) {
        return parsed.error;
      }

      return relay(
        await nodeApi.updateEventRegistrationStatus(segments[1], parsed.value, {
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

export async function DELETE(request: NextRequest, context: Context) {
  const requestId = getRequestId(request);
  const envError = ensureBackendBaseUrl(requestId);
  if (envError) {
    return envError;
  }

  const segments = (await context.params).segments ?? [];

  try {
    if (segments.length === 2 && segments[0] === "agenda") {
      const agendaIdError = parseUuid(segments[1], "agendaId", requestId);
      if (agendaIdError) {
        return agendaIdError;
      }

      return relay(
        await nodeApi.deleteEventAgenda(segments[1], {
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

function buildGetEventsParams(
  request: NextRequest,
  page?: number,
  limit?: number,
): GetEventsParams {
  const search =
    request.nextUrl.searchParams.get("search") ??
    request.nextUrl.searchParams.get("Search") ??
    undefined;

  return {
    Status: parseEnumValue(
      EventStatus,
      request.nextUrl.searchParams.get("status") ??
        request.nextUrl.searchParams.get("Status"),
    ),
    ParentEventId:
      request.nextUrl.searchParams.get("parentEventId") ??
      request.nextUrl.searchParams.get("ParentEventId") ??
      undefined,
    SeriesName:
      request.nextUrl.searchParams.get("seriesName") ??
      request.nextUrl.searchParams.get("SeriesName") ??
      search,
    Page: page,
    Limit: limit,
    SortBy: parseEnumValue(
      EventSortBy,
      request.nextUrl.searchParams.get("sortBy") ??
        request.nextUrl.searchParams.get("SortBy"),
    ),
    SortOrder: parseEnumValue(
      SortOrder,
      request.nextUrl.searchParams.get("sortOrder") ??
        request.nextUrl.searchParams.get("SortOrder"),
    ),
  };
}

function buildGetEventRegistrationsParams(
  request: NextRequest,
  page?: number,
  limit?: number,
): GetEventRegistrationsParams {
  return {
    Status: parseEnumValue(
      EventRegistrationStatus,
      request.nextUrl.searchParams.get("status") ??
        request.nextUrl.searchParams.get("Status"),
    ),
    Page: page,
    Limit: limit,
  };
}
