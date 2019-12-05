var sendTrigger = document.getElementById('js-send-trigger');
var sendCal = document.getElementById('js-send-cal');

var messages = document.getElementById('js-messages');


var sendWaveforms = 0;            // 0: Send waveforms Off,      1: On

var m_workDC;
var cvs;                           // Canvas
var ox = 1000, oy = 300;
var displayResolution = 1;

// ********************************************************************
//  
// ********************************************************************
function onClickSend() {

      const cvsWrapper = document.getElementById('canvas_wrapper');

      if(sendWaveforms == 1){
        // Clear and close the waveform window

        m_workDC.clearRect(0, 0, ox, oy);  // Clear all canvas


        cvsWrapper.style.height = 0;

//        $(".p2p-media #canvas_wrapper").height(0);
        sendWaveforms = 0;
        sendTrigger.innerText = 'Send ECG Waveforms';
        sendTrigger.style = "background:''; width:250px";
      }else{
        // Open the waveform window
//        $(".p2p-media #canvas_wrapper").height(oy);
        cvsWrapper.style.height = oy;

        sendWaveforms = 1;
        sendTrigger.innerText = 'Stop sending ECG Waveforms';
        sendTrigger.style = "background:#00F00F; width:250px";
      }

    console.log('onClickSend');
}


// ********************************************************************
//  
// ********************************************************************
function onClickCal() {
    console.log('onClickCal event');
	messages.textContent = 'Hello!!';
}


// ********************************************************************
//  Initial setup
// ********************************************************************
window.onload = function () {

  // Make canvas and get its size

  cvs = document.getElementById("waveformCanvas");
  m_workDC = cvs.getContext('2d');
  cvs.setAttribute("width", ox * displayResolution);
  cvs.setAttribute("height", oy * displayResolution);
  m_workDC.scale(displayResolution, displayResolution);


  m_workDC.fillStyle = "#00FF00";
  m_workDC.font = "20px Verdana";
  m_workDC.textAlign = "left";
  m_workDC.textBaseline = "top";

  sendTrigger.addEventListener('click', onClickSend);
  sendCal.addEventListener('click', onClickCal);

  sendCal.style.display = "block";

}
