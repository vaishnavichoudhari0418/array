const marks = [89,69,88,78,88,99]
let lar = marks[0]
for (const mark of marks)
{
    if(mark>lar)
    {
        lar=mark
    }
}
console.log(lar)