from sys import argv

def fact(n):
    result = 1
    for i in xrange(2, n + 1):
        result = result * i
    return result

def main(args):
    print fact(int(argv[1]))

if __name__ == "__main__":
    main(argv)
