# ESTUDOS DE IA UTILIZANDO (OPEN AI, HUGGING FACE E LANGCHAIN) )


from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

cliente = OpenAI()

contexto = "Esse áudio é de um anúncio da Jornada Full Stack da Hashtag, um conteúdo completaço sobre desenvolvimento"

with open("audio.mp3", "rb") as arquivo:
    transcricao = cliente.audio.transcriptions.create(
        file=arquivo,
        model="whisper-1",
        language="pt", response_format="srt", prompt=contexto)

print(transcricao)

with open("legenda.srt", "w", encoding="utf-8") as arquivo_legenda:
    arquivo_legenda.write(transcricao)