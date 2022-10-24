export class ServerError extends Error {}
export class BadRequest extends ServerError {}
export class Forbidden extends ServerError {}
export class NotFound extends ServerError {}
export class Unauthorized extends ServerError {}
export class InternalServerError extends ServerError {}
export class MissingParam extends ServerError {}
