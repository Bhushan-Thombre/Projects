/* Tic - Tac - Toe Game */

#include<iostream>
using namespace std;


int a[3][3];
int x[8],o[8];
void playear(void);
void computer(void);
int check(void);
void action(int ,int);
void actioncheck(void);
void vaction(void);
void display(void);


void display(void)
{ 
	int i,j;
	for(i=0;i<3;i++)
	{
			for(j=0;j<3;j++)
   			printf("   %c",a[j][i]);
		printf("\n\n");
	}
}

int check(void)
{
	int i,j,k=0,l=0,n,m;

		/* Horizontal Check */

		for(i=0;i<3;i++)
		{
			for(j=0;j<3;j++)
			{
				if(a[i][j]=='X')
				k++;
			} 
			for(j=0;j<3;j++)
			{
				if(a[i][j]=='O')
				l++;
		 	}
			if(k==3)
				return (5);
			else if(l==3)
				return (8);
		l=0;k=0;    
		}

		/* Vertical Check */

		for(i=0;i<3;i++)
		{
			for(j=0;j<3;j++)
			{
				if(a[j][i]=='X')
				k++;
			} 
			for(j=0;j<3;j++)
			{
				if(a[j][i]=='O')
				l++;
			}
		if(k==3)
			return (5);
		else if(l==3)
			return (8);
		l=0;k=0;
		}

		/* Diagonal Check */

		m=2;n=0;
		for(j=0;j<3;j++)
		{
			if(a[j][j]=='X')
			k++;
			else if(a[j][j]=='O')
			l++;
		}
		if(k==3)
			return (5);
		else if(l==3)
			return (8);
		l=0;k=0;

		for(j=0;j<3;j++)
		{
		 	if(a[m][n]=='X')
			k++;
			else if(a[m][n]=='O')
			l++;
			m--;n++;
		}
		if(k==3)
			return (5);
		else if(l==3)
			return (8);
}

void playear(void)
{
	int x,y,i; 
	printf("It's your turn!\nFirst enter Horizontal value than enter Vertical value\n");
	scanf("%d%d",&x,&y);
	x--;y--;
	a[x][y]='X';
}

void computer(void)
{
	int i;
	printf("IT's computer's turn\n");
	actioncheck();
	vaction();
}


void action(int k,int z)
{
int m,n;
	int i,l=0;
	if(k<=5)
	{
		if(z!=3)
		{
			for(i=0;i<3;i++)
			{
				if(k<=2)
				{
					if(a[i][k]==' ')
					{
						
						a[i][k]='O';
						break;
					}
				}
				else
				{
					if(a[k-3][i]==' ')
					{
						a[k-3][i]='O';
						break;
					}
				}
			}
		}
		else
		{
			if(k<=2)
			a[k][0]='O';
			else
			a[0][k-3]='O';
		}
	}
	else if(k>=5)
	{
		if(z!=3)
		{
			if(k==6)
			{
				for(i=0;i<3;i++)
				{
					if(a[i][i]==' ')
					{
						a[i][i]='O';
						break;
					}
				}
			}
			else
			{
				m=2;n=0;
				for(i=0;i<3;i++)
				{
					if(a[m][n]==' ')
					a[m][n]='O';
					m--;n++;
				}
			
		  	}
		}
		else 
		a[1][1]='o';
	   
	}
	
}

void vaction(void)
{
	int i,l=0;
	for(;5;)
	{
			
		for(i=0;i<8;i++)
		{
			if(x[i]==0&&o[i]==2)
			{
				action(i,1);
				l=1;
				break;
			}
		}
		if(l==1)
		break;
		
		for(i=0;i<8;i++)
		{
			if(x[i]==2&&o[i]==0)
			{
				action(i,2);
				l=1;
				break;
			}
		}
		if(l==1)
		break;
		
		for(i=0;i<8;i++)
		{
			if(x[i]==0&&o[i]==0)
			{
				action(i,3);
				l=1;
			 	break;
			}
		}
		if(l==1)
		break;
		
		for(i=0;i<8;i++)
		{
			if(x[i]==1&&o[i]==1)
			{
				action(i,4);
				l=1;
			break;
			}
		}
	}
}

void actioncheck(void)
{
	int i,q,p,k,l=0,m,n;

	/* Horizontal Check */

	for(i=0;i<3;i++)
	{
		q=0;p=0;
		for(k=0;k<3;k++)
		{
			if(a[k][i]=='X')
				q++;
			else if(a[k][i]=='O')
				p++;
			
		}
		x[l]=q;o[l]=p;
			l++;
	}
	
    /* Vertical Check */

	for(i=0;i<3;i++)
	{
		q=0;p=0;
		for(k=0;k<3;k++)
		{
			if(a[i][k]=='X')
			q++;
			else if(a[i][k]=='O')		
			p++;
			
		}
		x[l]=q;o[l]=p;
			l++;
	}

	/* Diagonal Check */

		q=0;p=0;
		for(k=0;k<3;k++)
		{
			if(a[k][k]=='X')
			q++;
			else if(a[k][k]=='O')
			p++;
		}
		x[l]=q;o[l]=p;
		l++;
		p=0;q=0;
		m=2;n=0;
		for(k=0;k<3;k++)
		{
		 	if(a[m][n]=='X')
			q++;
			else if(a[m][n]=='O')
			p++;
			m--;n++;
		}
			x[l]=q;o[l]=p;	
}


int main()
{
	int i,j,k;
    	
    /* Loop to give Space Value */

	for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		a[i][j]=32;
	}
	printf("Wellcome to Tic-Tac-Toe Game\n");

	/* Main Loop */

	for(i=1;i<=9;i++)
	{
		if(i%2==0)
		{
			computer();
			display();
		}
		else
		{
			playear();
			display();
		}
	
		k=check();
		if(k==5)
		{
			printf("Congrats, You Won !!\n");
			break;
		}
		else if(k==8)
		{
			printf("Computer Wins!!\n");
			break;
		}
	}
	if(i==10)
	printf("It's a Draw \nWell Played\n");
	return 0;
}