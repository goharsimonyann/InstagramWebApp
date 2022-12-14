import type { ValidationArguments, ValidationOptions } from 'class-validator';
import { registerDecorator } from 'class-validator';

export function IsPassword(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return (object, propertyName: string) => {
    registerDecorator({
      propertyName,
      name: 'isPassword',
      target: object.constructor,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string, _args: ValidationArguments) {
          if (value.length < 8) {
            return false;
          }

          return /((?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]))/.test(value);
        },
      },
    });
  };
}