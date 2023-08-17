import { createContext, useContext, useState, useEffect } from "react"


const GroceryListContext = createContext({})

export function useGroceryList() {
  return useContext(GroceryListContext)
}

export function GroceryListProvider({ children }) {
  const [list_item, set_list_items] = useState([])


  useEffect(() => {
    const fetch_list = async () => {
        const response = await fetch("/api/grocery_list/")
        const json = await response.json()
        if (response.ok) {
            var list_arr = []
            for (var item = 0; item < json.length; item++) {
                list_arr.push({id: json[item].grocer_id, quantity: json[item].quantity})
            }
            set_list_items(list_arr)
        }
    }

    fetch_list()
}, [])

  function get_item_quantity(id) {
    return list_item.find(item => item.id === id)?.quantity || 0
  }
  function increase_list_quantity(id, increase) {
    set_list_items(curr_items => {
      if (curr_items.find(item => item.id === id) == null) {
        return [...curr_items, { id, quantity: increase }]
      } else {
        return curr_items.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + increase }
          } else {
            return item
          }
        })
      }
    })
  }
  function decrease_list_quantity(id) {
    set_list_items(curr_items => {
      if (curr_items.find(item => item.id === id)?.quantity === 1) {
        return curr_items.filter(item => item.id !== id)
      } else {
        return curr_items.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function remove_from_list(id) {
    set_list_items(curr_items => {
      return curr_items.filter(item => item.id !== id)
    })
  }

  return (
    <GroceryListContext.Provider
      value={{
        get_item_quantity,
        increase_list_quantity,
        decrease_list_quantity,
        remove_from_list
      }}
    >
      {children}
    </GroceryListContext.Provider>
  )
}