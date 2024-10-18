import java.io.*;
class exVetor {
    public static void main (String args []){
        BufferedReader entrada;
        entrada = new BufferedReader(new InputStreamReader(System.in));
        try{
            float soma = 0;
            float [] vetor = new float [10];
            for (int i = 0, i < vetor.length; i++){
                System.out.println("Qual o valor?");
                vetor [i] = Float.parseFloat(entrada.readLine());
                soma = soma + vetor[i];
            }
            float media = soma / vetor.length;
            System.out.println ("A média = " + media);
        } catch (Exception e){
            System.out.println("Ocorreu um erro durante a leitura!");
        }
    }
}

