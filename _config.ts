import lume from 'lume/mod.ts';
import favicon from 'lume/plugins/favicon.ts';
import jsx from 'lume/plugins/jsx.ts';
import tailwindcss from 'lume/plugins/tailwindcss.ts';
import postcss from 'lume/plugins/postcss.ts';
import picture from 'lume/plugins/picture.ts';
import transformImages from 'lume/plugins/transform_images.ts';

const site = lume({
	src: './src',
	dest: './_site',
})
	.use(favicon())
	.use(picture())
	.use(transformImages())
	.use(jsx({ extensions: ['.jsx', '.tsx'] }))
	.use(tailwindcss({ minify: true }))
	.use(postcss())
	.copy('static');

site.add('/img').add('/styles.css');

export default site;
