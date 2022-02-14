//Nothing special for a service, just name it with ".service.ts" and export your service or services
//Check "my-service.component.ts" for where most of the "service" specific code is.

export class MyService {
    answerQuestion(question: string): string {
        const answer = 'The answer to "'+question+'" is... 42';
        return answer;
    }
}