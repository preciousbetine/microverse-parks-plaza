import sass from 'node-sass';

export default {
  process(src, filename) {
    const result = sass.renderSync({ file: filename });
    return result.css.toString('utf8');
  },
};
