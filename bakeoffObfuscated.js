const _0x112f=['height','database','ref','Average\x20time\x20per\x20target:\x20','113210gvMXqm','Total\x20time\x20taken:\x20','Opinions','Second\x20Iteration','1OjUbXy','initializeApp','remove','trial\x20order:\x20','bake-off-2-d4b75.firebaseapp.com','bake-off-2-d4b75.appspot.com','length','84207vQCMxQ','floor','Click\x20on\x20the\x20first\x20green\x20ball\x20to\x20start.','width','size','If\x20you\x20have\x20any\x20suggestions\x20or\x20advices\x20that\x20would\x20increase\x20your\x20performance,\x20please\x20write\x20them\x20down\x20below.','Trial\x20','ppi','https://bake-off-2-d4b75-default-rtdb.europe-west1.firebasedatabase.app/','252837pLGrZi','push','262217ZNqRSG','Thank\x20you\x20for\x20your\x20participation!','AIzaSyAXD8ZiSlhkJmddixMS1u_orycui6TPa3E','Misses:\x20','position','\x20of\x20','309944QGXWgN','\x20out\x20of\x202\x20completed!','181762lsMqNZ','Arial','1CTkDAf','59495hajYdL','screen','Hits:\x20'];const _0x16eb99=_0x5e0a;(function(_0x4e3f33,_0x13bb7b){const _0x30e256=_0x5e0a;while(!![]){try{const _0x33cdf3=parseInt(_0x30e256(0xa5))+parseInt(_0x30e256(0xb6))+parseInt(_0x30e256(0xba))*parseInt(_0x30e256(0xb0))+parseInt(_0x30e256(0xbb))+-parseInt(_0x30e256(0xae))+parseInt(_0x30e256(0xb8))*-parseInt(_0x30e256(0xc6))+-parseInt(_0x30e256(0xc2));if(_0x33cdf3===_0x13bb7b)break;else _0x4e3f33['push'](_0x4e3f33['shift']());}catch(_0x2a1f75){_0x4e3f33['push'](_0x4e3f33['shift']());}}}(_0x112f,0x29076));var firebaseConfig={'apiKey':_0x16eb99(0xb2),'authDomain':_0x16eb99(0xa2),'databaseURL':_0x16eb99(0xad),'storageBucket':_0x16eb99(0xa3)};const GROUP_NUMBER=0x1,BAKE_OFF_DAY=!![];function _0x5e0a(_0x46ac2c,_0x3bcc26){_0x46ac2c=_0x46ac2c-0xa2;let _0x112f52=_0x112f[_0x46ac2c];return _0x112f52;}let PPI,PPCM,TARGET_SIZE,TARGET_PADDING,MARGIN,LEFT_PADDING,TOP_PADDING,continue_button,testStartTime,testEndTime,hits=0x0,misses=0x0,database,draw_targets=![],trials=[],current_trial=0x0,attempt=0x0,fitts_IDs=[],comments_input,submit_button;class Target{constructor(_0x1b07ae,_0x57ff20,_0x59a342){this['x']=_0x1b07ae,this['y']=_0x57ff20,this['w']=_0x59a342;}}function setup(){const _0x177f17=_0x16eb99;createCanvas(0x2bc,0x1f4),frameRate(0x3c),randomizeTrials(),textFont(_0x177f17(0xb9),0x12),drawUserIDScreen();}function draw(){const _0x47950f=_0x16eb99;if(draw_targets){background(color(0x0,0x0,0x0)),fill(color(0xff,0xff,0xff)),textAlign(LEFT),text(_0x47950f(0xab)+(current_trial+0x1)+_0x47950f(0xb5)+trials['length'],0x32,0x14);current_trial===0x0&&text('Click\x20on\x20the\x20first\x20green\x20ball\x20to\x20start.',width/0x2-textWidth(_0x47950f(0xa7))/0x2,0x3c+display_size*0x3);for(var _0x1528b9=0x0;_0x1528b9<0x10;_0x1528b9++)drawTarget(_0x1528b9);}}function thank(){const _0x880d9=_0x16eb99;let _0x3847bc=comments_input['value']();submit_button[_0x880d9(0xc8)](),comments_input['remove'](),text(_0x880d9(0xb1),width/0x2,height/0x2-submit_button[_0x880d9(0xa9)]()[_0x880d9(0xbe)]/0x2);let _0x5cc806=color(0x0,0x0,0x0);fill(_0x5cc806),noStroke(),ellipse(width/0x2,0x122,width,0x28,0x1);let _0x572b23=database[_0x880d9(0xc0)](_0x880d9(0xc4));_0x572b23[_0x880d9(0xaf)](_0x3847bc);}function printAndSavePerformance(){const _0x568c76=_0x16eb99;let _0x557d54=parseFloat(hits*0x64)/parseFloat(hits+misses),_0x2f3179=(testEndTime-testStartTime)/0x3e8,_0x26f9fb=nf(_0x2f3179/parseFloat(hits+misses),0x0,0x3),_0x22164b=constrain((parseFloat(0x5f)-parseFloat(hits*0x64)/parseFloat(hits+misses))*0.2,0x0,0x64),_0x55b935=nf(_0x2f3179/parseFloat(hits+misses)+_0x22164b,0x0,0x3),_0x4e49a5=day()+'/'+month()+'/'+year()+'\x20\x20'+hour()+':'+minute()+':'+second();background(color(0x0,0x0,0x0)),fill(color(0xff,0xff,0xff)),text(_0x4e49a5,0xa,0x14),textAlign(CENTER),text('Attempt\x20'+(attempt+0x1)+_0x568c76(0xb7),width/0x2,0x3c),text(_0x568c76(0xbd)+hits,width/0x2,0x64),text(_0x568c76(0xb3)+misses,width/0x2,0x78),text('Accuracy:\x20'+_0x557d54+'%',width/0x2,0x8c),text(_0x568c76(0xc3)+_0x2f3179+'s',width/0x2,0xa0),text(_0x568c76(0xc1)+_0x26f9fb+'s',width/0x2,0xb4),text('Average\x20time\x20for\x20each\x20target\x20(+\x20penalty):\x20'+_0x55b935+'s',width/0x2,0xdc);attempt==0x1&&(text(_0x568c76(0xaa),width/0x2,0x122),comments_input=createInput(''),comments_input[_0x568c76(0xb4)](width/0x2-0xc8,0x140),comments_input[_0x568c76(0xa9)](0x190,0x1e),submit_button=createButton('SUBMIT'),submit_button['position'](width/0x2-submit_button['width']/0x2,height/0x2-submit_button[_0x568c76(0xa9)]()[_0x568c76(0xbe)]/0x2),submit_button['mouseReleased'](thank));let _0x47152d={'project_from':GROUP_NUMBER,'assessed_by':student_ID,'test_completed_by':_0x4e49a5,'attempt':attempt,'hits':hits,'misses':misses,'accuracy':_0x557d54,'attempt_duration':_0x2f3179,'time_per_target':_0x26f9fb,'target_w_penalty':_0x55b935,'fitts_IDs':fitts_IDs};if(BAKE_OFF_DAY){attempt===0x0&&(firebase[_0x568c76(0xc7)](firebaseConfig),database=firebase[_0x568c76(0xbf)]());let _0x1ef5b6=database[_0x568c76(0xc0)](_0x568c76(0xc5));_0x1ef5b6[_0x568c76(0xaf)](_0x47152d);}}function mousePressed(){const _0x2ba4b0=_0x16eb99;if(draw_targets){let _0x44668d=getTargetBounds(trials[current_trial]);if(dist(_0x44668d['x'],_0x44668d['y'],mouseX,mouseY)<_0x44668d['w']/0x2)hits++;else misses++;current_trial++,current_trial===0x1&&(testStartTime=millis(),ellipse(width/0x2,height/0x4,width,0x1e)),current_trial===trials[_0x2ba4b0(0xa4)]&&(testEndTime=millis(),draw_targets=![],printAndSavePerformance(),attempt++,attempt<0x2&&(continue_button=createButton('START\x202ND\x20ATTEMPT'),continue_button['mouseReleased'](continueTest),continue_button[_0x2ba4b0(0xb4)](width/0x2-continue_button[_0x2ba4b0(0xa9)]()[_0x2ba4b0(0xa8)]/0x2,height/0x2-continue_button[_0x2ba4b0(0xa9)]()['height']/0x2)));}}function drawTarget(_0x43c218){let _0x1d1b84=getTargetBounds(_0x43c218);if(trials[current_trial]==_0x43c218)trials[current_trial+0x1]==_0x43c218?(stroke(color(0xdc,0x0,0x0)),strokeWeight(0x5)):noStroke(),fill(color(0x0,0xdc,0x0)),circle(_0x1d1b84['x'],_0x1d1b84['y'],_0x1d1b84['w']);else trials[current_trial+0x1]==_0x43c218?(stroke(color(0xdc,0x0,0x0)),strokeWeight(0x5),fill(color(0x9b,0x9b,0x9b)),circle(_0x1d1b84['x'],_0x1d1b84['y'],_0x1d1b84['w'])):(noStroke(),fill(color(0x9b,0x9b,0x9b)),circle(_0x1d1b84['x'],_0x1d1b84['y'],_0x1d1b84['w']));}function getTargetBounds(_0x447a0b){const _0xb4aba4=_0x16eb99;var _0x5c59ee=parseInt(LEFT_PADDING)+parseInt(_0x447a0b%0x4*(TARGET_SIZE+TARGET_PADDING)+MARGIN),_0x36b499=parseInt(TOP_PADDING)+parseInt(Math[_0xb4aba4(0xa6)](_0x447a0b/0x4)*(TARGET_SIZE+TARGET_PADDING)+MARGIN);return new Target(_0x5c59ee,_0x36b499,TARGET_SIZE);}function continueTest(){const _0x2ba20d=_0x16eb99;shuffle(trials,!![]),current_trial=0x0,print(_0x2ba20d(0xc9)+trials),hits=0x0,misses=0x0,fitts_IDs=[],continue_button[_0x2ba20d(0xc8)](),draw_targets=!![];}function windowResized(){const _0x45f406=_0x16eb99;resizeCanvas(windowWidth,windowHeight);let _0x1b2011=new Display({'diagonal':display_size},window[_0x45f406(0xbc)]);PPI=_0x1b2011[_0x45f406(0xac)],PPCM=PPI/2.54,TARGET_SIZE=1.5*PPCM,TARGET_PADDING=1.5*PPCM,MARGIN=1.5*PPCM,LEFT_PADDING=width/0x2-TARGET_SIZE-1.5*TARGET_PADDING-1.5*MARGIN,TOP_PADDING=height/0x2-TARGET_SIZE-1.5*TARGET_PADDING-1.5*MARGIN,draw_targets=!![];}