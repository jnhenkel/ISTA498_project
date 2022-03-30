import java.util.Random;


void display() {
int color_r = 113;
int color_g = 235;
int color_b = 52;
size(800,800);
background(random(255),random(255),random(255));
int i = 0;
while ( i < 10) {
  i += 1;
  println(i);
  int j = int(random(30));
  int max = int(3);
  int min = int(1);
  double inputt = Math.floor(Math.random()*(max-min+1)+min);
  float f = (float) inputt;
  
  if (f == 1.0){
     while (j < 100) {
    j+=1;
    int posX = i * int(random(400));
    int posY = j * int(random(400));
    int randomm = int(1);
    if(randomm==1){
      int rand = int(random(0,600));
      fill(random(255), random(255), random(255));
      noStroke();
      ellipse(posX,posY,posX+20,posY+20);
      fill(color_r,color_g,color_b);
      noStroke();
      ellipse(posX+50,posY+50,posX+20,posY+20);
      }
  }
  println();
}
      else if(f == 2.0){ while (j < 100) {
    j+=1;
    int posX = i * int(random(40));
    int posY = j * int(random(40));
    int randomm = int(1);
    if(randomm==1){
      int rand = int(random(0,600));
      fill(random(255), random(255), random(255));
      noStroke();
      triangle(posX-50,posY-100,posX+rand-50,posY+rand-100,posX+2*rand-50,posY-100);
      }
  }
  println();
}
      else if (f == 3.0){
         while (j < 100) {
    j+=1;
    int posX = i * int(random(500));
    int posY = j * int(random(500));
    int randomm = int(1);
    if(randomm==1){
      fill(random(255), random(255), random(255));
      noStroke();
      rect(posX,posY,posX+20,posY+20);
      fill(random(255), random(255), random(255));
      noStroke();
      rect(posX+100,posY+100,posX+20,posY+20);
      fill(random(255), random(255), random(255));
      noStroke();
      rect(posX+100,posY+100,posX+20,posY+20);
    
      }
  }
  println();
}
  


  



}
}
export display;