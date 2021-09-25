import java.util.Scanner;
import java.util.Stack;
class prob2{
    public static Scanner scn=new Scanner(System.in);
    public static void main(String[]args){
        String text=scn.next();
        String pattern=scn.next();

        int n=text.length();
        int m=pattern.length();
        int p=0;
        int no=0,loc=-1;
        int temp=0,tloc=-1;;
        for(int i=0;i<n;i++){
            char ch=text.charAt(i);
            char ch1=pattern.charAt(p);
            if(ch==ch1 && p==0 && temp==0)
            tloc=i;
            if(ch==ch1){
                p++;
            }
            else{
                if(temp>no){
                    no=temp;
                    loc=tloc;
                }
                p=0;
                tloc=-1;
                temp=0;
            }
            if(p==m){
                p=0;
                temp++;
            }
        }
        if(p==m)
        temp++;

         if(temp>no){
                    no=temp;
                    loc=tloc;
                }

        System.out.println(loc+" "+no);
    }
}