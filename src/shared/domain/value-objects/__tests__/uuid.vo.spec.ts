import { InvalidUuidError, Uuid } from "../uuid.vo"
import {validate as uuidValidate} from 'uuid';

describe('Uuid Unit Test', () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

  test('should throw error qhen uuid is invalid', () => {
    expect(() => {
      new Uuid('invalid-uuid');
    }).toThrow(new InvalidUuidError());
  })

  test('should create a valid uuid', () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(uuidValidate(uuid.id)).toBe(true);
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
  
  test('should accept a valid uuid', () => {
    const uuid = new Uuid('c3e9b0d0-746f-4a8e-8e1f-3f9e6a2f7e3c');
    expect(uuid.id).toEqual('c3e9b0d0-746f-4a8e-8e1f-3f9e6a2f7e3c');
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
})