# -*- coding=utf-8 -*-

FILE_NAME = 'agenda.txt'


def create_file():
    print("""
        **************
        /   AGENDA   /
        **************

        INGRESO DE LOS PRIMEROS 10 BENEFICIARIOS
    """)

    write_file(get_beneficiary_data(), 'w')
    counter = 1
    while counter < 2:
        write_file(get_beneficiary_data(False), 'a')
        counter += 1


def search_one(name):
    beneficiary = search_by_criteria(name)
    mobile_number = beneficiary[2]
    print(f'Número de Celular: {mobile_number}')


def delete():
    document_number = input('Ingrese número de documento que desea eliminar: ').strip()
    if validate_beneficiary(document_number):
        beneficiary = search_by_criteria(document_number)
        beneficiaries = get_all()
        for b in beneficiaries:
            del beneficiaries[beneficiaries.index(beneficiary)]

        new_beneficiaries = []
        for beneficiary in beneficiaries:
            for element in beneficiary:
                new_beneficiaries.append(element)

        write_file(new_beneficiaries, 'w+')
        print('Beneficiario Eliminado correctamente.')

    else:
        print('No existe el usuario que desea eliminar.')


def create_one():
    write_file(get_beneficiary_data(False), 'a')


def show_all_data():
    beneficiaries = get_all()
    for beneficiary in beneficiaries:
        print("""
            Nombre y Apellido: {}
            Número de Documento: {}
            Número de Celular: {}
        """.format(beneficiary[0], beneficiary[1], beneficiary[2]))


def show_all_by_letter():
    letter = input('Ingrese letra: ')
    names = []
    beneficiaries = get_all()
    for beneficiary in beneficiaries:
        for element in beneficiary:
            if element[0].startswith(letter):
                names.append(element)

    print('Beneficiarios: \n')
    for name in names:
        print(f'{name}')


def get_all():
    beneficiary = []
    data = []
    with open(FILE_NAME, 'r') as f:
        for element in f.readlines():
            beneficiary.append(element[:-1],)
            if len(beneficiary) == 3:
                data.append(beneficiary)
                beneficiary = []
    return data


def get_beneficiary_data(is_first=True):
    first_name = input('Ingrese nombre: ')
    last_name = input('Ingrese apellido: ')
    document_number = input('Ingrese número de documento: ')
    if not is_first:
        while validate_beneficiary(document_number):
            print('Ya existe un beneficiario con ese mismo numero de documento.')
            document_number = input('Ingrese número de documento: ')

    mobile_number = input('Ingrese su número de celular: ')
    return [f'{first_name} {last_name}', document_number.strip(), mobile_number.strip(), ]


def search_by_criteria(criteria):
    beneficiaries = get_all()
    for beneficiary in beneficiaries:
        if criteria in beneficiary:
            return beneficiary


def validate_beneficiary(document_number):
    beneficiary = search_by_criteria(document_number)
    if beneficiary is not None:
        return document_number == beneficiary[1]


def write_file(data, option):
    with open(FILE_NAME, option) as f:
        for element in data:
            f.write(f'{element}\n')


def run_function():
    while True:
        option = input('Ingrese opción: ')
        func_name = get_selected_option(option)
        if func_name is not None:
            globals()[func_name]()
        else:
            if option == '6':
                print('(ʘ‿ʘ)╯ Bye....')
                break
            print('Opción incorrecta.')

        input_value = input('Desea ejecutar otra operación (s/n): ')
        is_run_again = input_value.lower() != 's'
        if is_run_again:
            print('Bye....')
            break
        print_menu()


def get_selected_option(option):
    options = {
        '1': 'search_one',
        '2': 'delete',
        '3': 'create_one',
        '4': 'show_all_data',
        '5': 'show_all_by_letter',
    }

    return options.get(option)


def print_menu():
    print("""
        **************
        /    MENÚ    /
        **************

        1. Buscar Beneficiario.
        2. Borrar Beneficiario.
        3. Añadir Beneficiario.
        4. Listar todos los Beneficiarios.
        5. Listar Beneficiarios por nombre.
        6. Salir.
    """)


def init():
    create_file()
    print_menu()
    run_function()


if __name__ == "__main__":
    init()
