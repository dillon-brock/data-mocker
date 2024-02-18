export default class DataGenerator {

  generateData(schema) {
    const mockData = {}
    for (const [entity, fields] of schema.entries()) {
      mockData[entity]
    }
  }

  generateEntityData(entitySchema) {
    const entityData = {}

    for (const [fieldName, fieldSchema] of entitySchema.entries()) {
      if ('type' in fieldSchema) {
        const fieldType = fieldSchema.type
        if (fieldType == 'string') {
          entityData[fieldName] = this.generateString(fieldSchema)
        } else if (fieldType == 'integer') {
          entityData[fieldName] = this.generateInteger(fieldSchema)
        }
      }
    }

    return entityData;
  }

  generateString(fieldSchema) {
    const length = fieldSchema.length ?? 10
    const characters = fieldSchema.characters ?? 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const str = '';

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      str += char[charIndex]
    }

    return str;
  }

  generateInteger(fieldSchema) {
    const min = fieldSchema['minValue'] ?? 0;
    const max = fieldSchema['maxValue'] ?? 100;
    return this.getRandInteger(min, max)
  }

  getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
}
