interface TaskResults {
  [taskId: string]: {
    task: any;
    code: number;
    status: string;
    terminalOutput: string;
    startTime: number;
    endTime: number;
  };
}

export async function postTasksExecution(options: any, context) {
  console.log('POST HOOK START- All tasks have completed - displaying results...');
  const taskResults: TaskResults = context.taskResults;

  for (const [taskId] of Object.entries(taskResults)) {
    console.log(`Task: ${taskId}`);
  }
  console.log('POST HOOK END')
}
