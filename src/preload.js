// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// Get button btn-open-exe
const btnOpenExe = document.getElementById('btn-open-exe');

btnOpenExe.addEventListener('click', () => {
  // import child_process for open exe file
  const { exec } = require('child_process');
  // open exe file
  const exeFilePath = '';
  exec(exeFilePath, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
});
