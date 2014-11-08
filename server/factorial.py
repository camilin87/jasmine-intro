from sys import argv

def _fact(n):
    result = 1
    for i in xrange(2, n + 1):
        result = result * i
    return result

print _fact(int(argv[1]))
