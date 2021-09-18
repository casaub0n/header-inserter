import Ajv, {  JTDDataType } from 'ajv/dist/jtd'

const schema = {
  properties: {
    name: {type: "string"},
    namespace: {type: "string"},
    version: {type: "string"},
    description: {type: "string"},
    author: {type: "string"},
    match: {type: "string"},
    grant: {type: "string"}
  },
  optionalProperties: {
    sameversion: {type: "boolean", nullable: true}
  }
} as const

type Mydata = JTDDataType<typeof schema>

/**
 * validate for data
 * @param data everything ok
 * @returns
 */
export const validateJson = (data: any) => {
  const ajv = new Ajv()
  const validate = ajv.compile<Mydata>(schema)
  if (validate(data)) {
    return data
  }
  return undefined
}
