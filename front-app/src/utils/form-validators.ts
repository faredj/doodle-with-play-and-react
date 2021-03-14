
const REGEX_EMAIL: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

export const Validator = {
  build : <T, S>(values: T, validators: S): any => {
    const errors: T = {} as T

    Object.keys(validators).forEach(f => {
      const validation: Array<(x) => string> | ((x) => string) = validators[f]
      if (!Array.isArray(validation)) {
        errors[f] = Validator.build(values[f] || {}, validation)
      } else {
        validation.forEach(v => {
          const error: string = v(values[f])
          if (error) errors[f] = error
        })
      }
    })
    return errors
  },

  required : (x: string): string => {
    if (!x) {
      return "Required"
    }
    return undefined
  },

  min : (min: number) => (x: string): string => {
    if (x && min && x.length < min) {
      return `Must be greater than ${min}`
    }
    return undefined
  },

  email : (email: string): string => {
    if (email && !REGEX_EMAIL.exec(email)) {
      return "Invalid email"
    }
    return undefined
  }
}
