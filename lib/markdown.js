import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { v4 as uuid } from 'uuid';

export async function getMarkdownContent(fileName) {
    const filePath = path.join(process.cwd(), 'content', fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Extract the badge message
    const badgeMessageRegex = /<!-- badgeMessageStart -->([\s\S]*?)<!-- badgeMessageEnd -->/;
    const badgeMessageMatch = badgeMessageRegex.exec(fileContents);
    const badgeMessage = badgeMessageMatch ? badgeMessageMatch[1].trim() : '';

    // Remove the badge message from the main content
    const contentWithoutBadge = fileContents.replace(badgeMessageRegex, '').trim();
    
    // Convert the remaining content to HTML
    const processedContent = await remark().use(html).process(contentWithoutBadge);
    const contentHtml = processedContent.toString();

    return {
        contentHtml,
        badgeMessage
    };
}

