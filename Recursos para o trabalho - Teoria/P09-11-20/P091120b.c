#include <stdio.h>
#include <stdlib.h>

//especificador de formato (forma genérica)
// %[flags][width][.precisão][h|l|L] type_char

int main()
{

    int i, j;
    float x,y;

    printf("Digite 12 12.4 35.2 3 \n");
    scanf("%f %d %f %d", &x, &i, &y, &j);

    printf("\n%f %d %f %d", x, i, y, j);


    return 0;
}

