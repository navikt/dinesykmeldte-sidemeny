export function cleanId(title: string): string {
    return title.replace(/\W/g, '_');
}

function appendPossesive(navn: string): string {
    return navn.endsWith('s') || navn.endsWith('x') ? `${navn}'` : `${navn}s`;
}
export function formatFirstNamePossessive(name: string, postfix: string): string {
    return `${appendPossesive(name.split(' ')[0])} ${postfix}`;
}
