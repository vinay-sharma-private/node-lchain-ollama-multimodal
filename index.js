import { Ollama } from "langchain/llms/ollama";
import * as fs from "node:fs/promises";
import { PromptTemplate } from 'langchain/prompts'
import { StringOutputParser } from 'langchain/schema/output_parser'
import { RunnableSequence } from "langchain/schema/runnable"

const imageData = await fs.readFile("./pizza.png");
const model = new Ollama({
    model: "llava",
    baseUrl: "http://127.0.0.1:11434",
}).bind({
    images: [imageData.toString("base64")],
});

const imageDescriptionTemplate = 'You are a helpful assistant who is an expert in extracting information from a given image and answer any questions using that information.{question}'
const imageDescriptionPrompt = PromptTemplate.fromTemplate(imageDescriptionTemplate)

const imageDescriptionChain = imageDescriptionPrompt
    .pipe(model)
    .pipe(new StringOutputParser())

const chefTemplate = `You are a talented chef. Write an article on the recipe, listing out the ingredients and preparation instructions for the dish from the input.
    input: {input}
    article: `
const chefPrompt = PromptTemplate.fromTemplate(chefTemplate)

const chefChain = chefPrompt
    .pipe(model)
    .pipe(new StringOutputParser())

const chain = RunnableSequence.from([
    {
        input: imageDescriptionChain,
    },
    chefChain
])

const response = await chain.invoke({
    question: "What dish is in the image?"
})
console.log(response);

