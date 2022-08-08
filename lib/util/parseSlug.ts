const parseSlug = (slug: string): string => {
    if (slug == 'home') {
        return '/';
    }

    return `${slug.replace(/home|pages/i, '')}`;
}

export default parseSlug; 
