// tests/blockenergy.test.js
/**
 * Tests for BlockEnergy module
 */

const { BlockEnergy } = require('../src/blockenergy');

describe('BlockEnergy', () => {
    let instance;

    beforeEach(() => {
        instance = new BlockEnergy({ verbose: false });
    });

    test('should create instance with default config', () => {
        expect(instance).toBeDefined();
        expect(instance.timeout).toBe(30000);
        expect(instance.maxRetries).toBe(3);
    });

    test('should execute successfully', async () => {
        const result = await instance.execute();
        expect(result.success).toBe(true);
        expect(result.message).toBeTruthy();
    });

    test('should process data', async () => {
        const result = await instance.process();
        expect(result.processed).toBe(true);
    });
});
