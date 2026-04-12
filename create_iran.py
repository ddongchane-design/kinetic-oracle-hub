import codecs

with codecs.open('bmnr_graph.html', 'r', 'utf-8') as f:
    text = f.read()

text = text.replace('bmnr_data.js', 'iran_data.js')
text = text.replace('BMNR Graph', '이란 전쟁 분석')

with codecs.open('iran_graph.html', 'w', 'utf-8') as f:
    f.write(text)

print("iran_graph.html created successfully.")
