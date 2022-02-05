# a = int(input("enter the value of a"))
# r = int(input("enter the value of r"))
# p = int(input("enter the value of p"))
# n = int(input("enter the value of n"))


# def result(a, r, p, n):
#     result = a
#     t=1
#     while t<=n:
#         result = result+(a+t*r)**(p)
#         t=t+1
#     return result


# print(result(a, r, p, n))

# class Node:
#     def __init__(self, element, next, prev):
#         self.element = element
#         self.next = next
#         self.prev = prev

#     def sorting(self, head):
#         i = head
#         min = Node(None, None, None)
#         while i.next is not None:
#             min = i
#             j = i.next
#             while j is not None:

#                 if j.element < min.element:
#                     min.element = j.element
#                 j = j.next

#             temp = i.element
#             i.element = min.element
#             min.element = temp


from matplotlib.font_manager import _Weight


class vehicle:
    
    vehicleType="None"
    categories="None"
    Weight=0