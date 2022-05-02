/** @format */
export const validateMaria: Function = (params: {
  user: string | Error
  password: string | Error
  host: string | Error
  database: string | Error
}): {
  user: string
  password: string
  host: string
  database: string
} => {
  const user = params.user instanceof Error ? `` : params.user
  const password = params.password instanceof Error ? `` : params.password
  const host = params.host instanceof Error ? `` : params.host
  const database = params.database instanceof Error ? `` : params.database
  return {
    user,
    password,
    host,
    database
  }
}
