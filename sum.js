const num=[1,3,6,9,12,15,18,21,24];
sum=0
for(i=0;i<num.length;i++)
{
    if(num[i]%2!=0)
    {
        sum+=num[i]
    }
}
console.log(`sum of odd no: ${sum}`)