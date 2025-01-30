import { Branded } from '@/_shared';

export type OffsetTime = Branded<string, 'OffsetTime'>;

const offsetTimeRegex = /^\d{2}:\d{2}(:\d{2})?([+-]\d{2}:\d{2})?$/;

export const validateOffsetTime = (value: string): OffsetTime => {
    if (!offsetTimeRegex.test(value)) {
        throw new Error(`Invalid OffsetTime format: ${value}`);
    }
    return value as OffsetTime;
};
