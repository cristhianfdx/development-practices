type SumaParameter = number | string;

function suma(num1: SumaParameter, num2: SumaParameter): SumaParameter {
    return String("La suma es") + Number(num1) + Number(num2);
}

interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

// type InterfaceMix = Interface1 | Interface2;

// const mix: InterfaceMix = {
//     prop2: 2
// }