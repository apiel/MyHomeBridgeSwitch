export function RestGET(hello: string) {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        console.log(hello);
        return false;
    };
}