
{% macro provideMacro(name) %}
goog.provide('{name}');
{% endmacro %}

{% macro requireMacro(name) %}
goog.require('{name}');
{% endmacro %}

{% macro inheritsMacro(className, parentName)}
goog.inherits({className}, {parentName});
{% endmacro %}

{% macro aliasesMacro(aliases) %}
    {% for (alias, name in aliases) %}
        {% if loop.first %}
           var {alias} = {name},
        {% elif loop.last %}
               {alias} = {name};
        {% else %}
               {alias} = {name};
        {% endif %}
    {% endfor %}
{% endmacro %}
