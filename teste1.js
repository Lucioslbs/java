import java.io.*;

class Exemplo62{
    public static void main (String args[]) {
        int teste1 [] = new int [10];
        int teste2 [] = new int [10];
        BufferedReader entrada;
        entrad = new BufferedReader(new InputStreamReader(System.in));
        try{
            for (int i = 0; i < 10; i++) {
                if (i % 2 == 0)
                    teste2[i] = teste1[i] * 5;
                else
                    teste2[i] = teste1[i] + 5;
            }
            System.out.println();
            System.out.println("Resultado:");
            for (int i = 0; i < 10; i++) {
                System.out.println("teste1[" + i + "] = " + teste1[i] + "\t");
                System.out.println("teste2[" + i + "] = " + teste2[i]);
            }
        } catch (Exception e) {
            System.out.println("Ocorreu um erro durante a leitura!");
        }
    }
}
