import { File, IMD, Subject } from '../Types/markdownJSON';
import sanitize from './sanitize';

export default function getArticle(data: IMD, subject?: string, article?: string): {
  article: File, subject: Subject } {
  if (!subject || !article) throw new Error('Article or Subject not found in path');

  const cleanSub = subject.split('-').join('');
  const sub: Subject | undefined = data.directories.find((s) => {
    const cleaned = sanitize(s.title).split('-').join('');
    if (cleaned === cleanSub) return true;
    return false;
  });

  if (!sub || !sub.files || !Array.isArray(sub.files)) throw new Error('Subject not found');

  const cleanArticle = article.split('-').join('');
  const articleMD: File | undefined = sub.files.find((a: File) => {
    const cleaned = sanitize(a.title).split('-').join('');
    if (cleaned === cleanArticle) return true;
    return false;
  });
  if (!articleMD || !articleMD.contents || !Array.isArray(articleMD.contents)) throw new Error('Article not found');

  return {
    article: articleMD,
    subject: sub,
  };
}
