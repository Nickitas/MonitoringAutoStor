export const parseNumberToString = (value: number) => {
    return value?.toLocaleString('ru', { useGrouping: true });
}  