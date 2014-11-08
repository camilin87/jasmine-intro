task :default => [:test]

task :test do
    assert_equals "1", run_fact("0")
    assert_equals "1", run_fact("1")
    assert_equals "2", run_fact("2")
    assert_equals "6", run_fact("3")
    assert_equals "3628800", run_fact("10")

    puts "Tests OK"
end

def assert_equals(expected, actual)
    error_message = "Expected: #{expected} Got: #{actual}"
    fail error_message unless expected == actual
    puts "."
end

def run_fact(n)
    return `python factorial.py #{n}`.strip
end
