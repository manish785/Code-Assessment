
// 1.fibbonacci - it is basically sum of previous two numbers. First number is 0  here and Second number is 1.
//The time and space complexity of the below solution is - 
// TC- O(N) and SC- O(N)

Code- 
int fibonacciFinder(int n)
{
	
	// Declare an array to store Fibonacci numbers.
	// 1 extra to handle
	// case, n = 0
	int arr[n + 2];
	int i;

	// 0th and 1st number of the
	// series are 0 and 1
	f[0] = 0;
	f[1] = 1;

	for(i = 2; i <= n; i++)
	{
		
	//Add the previous 2 numbers
	// in the series and store it
	arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr[n];
	}
};


int main ()
{

	int n;
    cin>>n;
	cout << fibonacciFinder(n);
	return 0;
}


3./* Rotate the Array elements to right by K values */

/* Approach-  we will divide the K value by N because the after K iterations, we get the same array values.
so it is not making sense if K value remain greater than N. and Now, we will iterate the array from i = 0 to i = N-1 and check, 
If i < K, Print rightmost Kth element (a[N + i -K]). Otherwise, 
Print array after ‘K’ elements (a[i – K]). 
The time and space complexity of the below solution is-
TC- O(N) and SC- O(1)
*/
Code- 

void RightArrayElements(int arr[], int n, int k)
{
     
    // If rotation is greater than size of array
    k = k % n;
 
    for(int i = 0; i < n; i++)
    {
       if(i < k)
       {
            
           // Printing rightmost kth elements
           cout << a[n + i - k] << " ";
       }
       else
       {
            
           // Prints array after 'k' elements
           cout << (a[i - k]) << " ";
       }
    }
    cout << endl;
}
     

int main()
{
    int n,k;   //here n is the size of array and k the value by which we rotated the array elements
    cin>>n;
    cin>>k;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    RotateArrayElements(arr,n,k);
}
 

4./* Find the smallest positive integer value that cannot be represented as sum of any subset of a given array

Approach -  
Let the input array be arr[0..n-1]. We first sort the array in non-decreasing order.
Let the smallest element that cannot be represented by elements at indexes from 0 to (i-1) be ‘result’. 
We initialize ‘result’ as 1 (smallest possible answer) and traverse the given array from i=0. 
There are the following two possibilities when we consider element at index i:
1.We decide that ‘result’ is the final result: If arr[i] is greater than ‘result’, then we found the gap which is ‘result’ 
because the elements after arr[i] are also going to be greater than ‘result’.
2.The value of ‘result’ is incremented after considering arr[i]: If arr[i] is not greater than ‘res’,
 the value of ‘result’ is incremented by arr[i] so ‘result’ = ‘result’+arr[i] (why? If elements from 0 to (i-1) can 
represent 1 to ‘result-1’, then elements from 0 to i can represent from 1 to ‘result + arr[i] – 1’ 
by adding arr[i] to all subsets that represent 1 to ‘result-1’ which we have already determined to be represented)
*/

Code- 
// Returns the smallest number that cannot be represented as sum of subset of elements from set represented by sorted array arr[0..n-1]
long long smallestPositiveValue(vector<long long> arr, int n) {
long long  result = 1; // Initialize result

sort(arr.begin(), arr.end());
// Traverse the array and increment 'res' if arr[i] is
// smaller than or equal to 'result'.
for (int i = 0; i < n && arr[i] <= result; i++)
	result = result + arr[i];

return result;
}

int main() {
vector<long long> arr1 = {1, 10, 100, 1000};
cout << smallestPositiveValue(arr1, arr1.size()) << endl;
return 0;
}











