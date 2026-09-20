// اكتب تاريخ ميلاد باباك هنا: السنة-الشهر-اليوم
const CORRECT_BIRTH_DATE = "1983-09-21";

const d=document.getElementById("day"),m=document.getElementById("month"),y=document.getElementById("year");
for(let i=1;i<=31;i++){let o=document.createElement("option");o.value=String(i).padStart(2,"0");o.textContent=i;d.appendChild(o)}
["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"].forEach((x,i)=>{let o=document.createElement("option");o.value=String(i+1).padStart(2,"0");o.textContent=x;m.appendChild(o)});
for(let i=new Date().getFullYear();i>=1930;i--){let o=document.createElement("option");o.value=i;o.textContent=i;y.appendChild(o)}

function openGift(){
  const err=document.getElementById("error");
  if(!d.value||!m.value||!y.value){err.textContent="اختار اليوم والشهر والسنة الأول ❤️";return}
  if(`${y.value}-${m.value}-${d.value}`!==CORRECT_BIRTH_DATE){err.textContent="التاريخ مش هو ده 😄 جرّب تاني يا بابا ❤️";return}
  err.textContent="";
  show("message");
  hearts(18);
}
function showFinal(){show("final");hearts(25)}
function show(id){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));document.getElementById(id).classList.add("active");scrollTo(0,0)}
function hearts(n){for(let i=0;i<n;i++){let h=document.createElement("span");h.className="heart";h.textContent="❤";h.style.left=Math.random()*100+"%";h.style.fontSize=12+Math.random()*22+"px";h.style.animationDuration=4+Math.random()*4+"s";document.getElementById("hearts").appendChild(h);setTimeout(()=>h.remove(),9000)}}
