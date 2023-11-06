export const loadCars = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL ?? "");
    const data = await res.json();

    return data;
}