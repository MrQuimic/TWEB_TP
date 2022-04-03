#include <stdio.h>
#include <stdlib.h>

//especificador de formato (forma genérica)
// %[flags][width][.precisão][h|l|L] type_char

int main()
{

    int i = 10, retorno;
    float f = 5.374;

    printf("0 *%f*\n", f); //
    printf("1 *%.1f*\n", f);
    printf("2 *%4f*\n", f);
    printf("3 *%10f*\n", f);
    printf("4 *%8.2f*\n", f);
    printf("4 *%08.2f*\n", f);
    printf("5 *%0.4f*\n", f);
    printf("6 *%0.0f*\n", f);
    printf("7 *%4.2e*\n", f);
    printf("8 *%d*\n", i);
    printf("9 *%5d*\n", i);
    printf("0 *%05d*\n", i);
    printf("1 *%-6d*\n", i);
    printf("2 *%4.2d*\n", i);
    printf("3 *%8.2d*\n", i);
    printf("4 *%.5d*\n", i);

//0 *5.374000*
//1 *5.4*
//2 *5.374000*
//3 *  5.374000*
//4 *    5.37*
//4 *00005.37*
//5 *5.3740*
//6 *5*
//7 *5.37e+000*
//8 *10*
//9 *   10*
//0 *00010*
//1 *10    *
//2 *  10*
//3 *      10*
//4 *00010*



    return 0;
}

