import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import FAQPagePreview from './preview-templates/FAQPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('faq', FAQPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
