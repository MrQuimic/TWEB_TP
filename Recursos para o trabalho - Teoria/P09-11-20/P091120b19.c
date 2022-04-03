#include <stdio.h>
#include <stdlib.h>
#include <windows.h>


int main()
{

    int dia, mes, ano;
    float montante, juro;

    SetConsoleOutputCP(1252);


    printf("Informação necessária:\n");
    printf("\tData actual: ");
    scanf("%d/%d/%d", &dia, &mes, &ano);
    printf("\n\tMontante inicial: \x80");
    scanf("%f", &montante);
    printf("\n\tTaxa: ");
    scanf("%f", &juro);
    printf("%%");

    printf("\nCálculo do montante:\n");
    printf("\tNo dia %02d%02d%4d vai ter no banco \x80%f.", dia, mes, ano+1, montante*(1+juro/100));

    return 0;
}

