const { encode, decode } = require('./355.1');

describe('355.1', () => {
  describe('encode', () => {
    it('should pass example 1', () => {
      expect(encode('bond', 'theredfoxtrotsquietlyatmidnight')).toBe('uvrufrsryherugdxjsgozogpjralhvg');
    });
    it('should pass example 2', () => {
      expect(encode('train', 'murderontheorientexpress')).toBe('flrlrkfnbuxfrqrgkefckvsa');
    });
    it('should pass example 3', () => {
      expect(encode('garden', 'themolessnuckintothegardenlastnight')).toBe('zhvpsyksjqypqiewsgnexdvqkncdwgtixkx');
    });
  });
  describe('decode', () => {
    it('should pass example 1', () => {
      expect(decode('bond', 'uvrufrsryherugdxjsgozogpjralhvg')).toBe('theredfoxtrotsquietlyatmidnight');
    });
    it('should pass example 2', () => {
      expect(decode('train', 'flrlrkfnbuxfrqrgkefckvsa')).toBe('murderontheorientexpress');
    });
    it('should pass example 3', () => {
      expect(decode('garden', 'zhvpsyksjqypqiewsgnexdvqkncdwgtixkx')).toBe('themolessnuckintothegardenlastnight');
    });
  });
});
