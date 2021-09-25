import java.util.Scanner;
import java.util.Stack;
class prob1{
    public static Scanner scn=new Scanner(System.in);
    public static void main(String[]args){
        String str=scn.next();
        Stack<Character>st=new Stack<>();
        int n=str.length();
        for(int i=0;i<n;i++){
            char ch=str.charAt(i);
            if(ch=='(' || ch=='{' || ch=='['){
                st.push(ch);
            }
            else{
                if(st.size()!=0){
                    if(st.peek()=='(' && ch==')')
                    st.pop();
                    else if(st.peek()=='{' && ch=='}')
                    st.pop();
                    else if(st.peek()=='[' && ch==']')
                    st.pop();
                    else
                    st.push(ch);
                }
                else
                st.push(ch);
            }
        }
        if(st.size()!=0)
        System.out.println("NO");
        else
        System.out.println("YES");
    }
}