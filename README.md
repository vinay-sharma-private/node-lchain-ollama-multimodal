# node-lchain-ollama-multimodal
This is a Node.js Generative AI application that leverages Ollama and Langchain to showcase the multimodal capabilities of a model. The chain takes an image of a dish as input and provides a description of its contents, including identification of the dish in the image. This description is later utilized in the chain, where model assumes the persona of a chef and generates an article about the dish's recipe and preparation instructions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. You would need to install and run Ollama and Chroma locally on your system.

### Prerequisites

- Node.js
- npm
- Ollama

### Installing

1. Clone the repository: `git clone https://github.com/vinay-sharma-private/node-lchain-ollama-multimodal`
2. Navigate to the project directory: `cd node-lchain-ollama-multimodal`
3. Install the dependencies: `npm install`

## Running the Application

To start the application, run: `node index.js`

## Application Structure

- `index.js`: This is the main file where the application starts. It initializes Ollama, Ollama Embeddings, Chroma Vector Store, and the Conversational Retrieval QA Chain.

## Built With

- [Ollama](https://ollama.ai/): A library for getting up and running with large language models locally.
- [Langchain](https://www.langchain.com/): A framework for developing applications powered by language models.

## License

This project is licensed under the Apache License.