import sys

REPLACE_AREA = '#REPLACE_AREA#'

if __name__ == '__main__':
    question_filename = 'example.txt'

    if len(sys.argv) > 1:
        question_filename = sys.argv[1]

    with open('bio.html', 'r') as bio_html:
        data = bio_html.read()

        left_index = data.index(REPLACE_AREA)
        right_index = left_index + len(REPLACE_AREA)

        str1 = data[:left_index]
        str2 = data[right_index:]

        with open('bio-build.html', 'w') as bf:
            bf.write(str1)

            with open(question_filename, 'r') as qf:
                while True:
                    line = qf.readline()
                    if line == '':
                        break

                    bf.write('<p><span>')

                    if line[-1] == '\n':
                        line = line[:-1]

                    bf.write(line)

                    bf.write('</span></p>')

                    bf.write('\n')

            bf.write(str2)
