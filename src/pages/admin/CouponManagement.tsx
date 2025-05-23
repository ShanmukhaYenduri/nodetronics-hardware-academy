
import React, { useState } from 'react';
import { Calendar, ArrowRight, Check, X, Plus, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Coupon = {
  id: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  assignedTo: string;
  usageCount: number;
  maxUsage: number | null;
  expiryDate: string | null;
  isActive: boolean;
};

const CouponManagement = () => {
  const [newCoupon, setNewCoupon] = useState<Omit<Coupon, 'id' | 'usageCount'>>({
    code: '',
    discountType: 'percentage',
    discountValue: 10,
    assignedTo: '',
    maxUsage: null,
    expiryDate: null,
    isActive: true
  });
  
  const [coupons, setCoupons] = useState<Coupon[]>([
    {
      id: '1',
      code: 'NODETRONICS10',
      discountType: 'percentage',
      discountValue: 10,
      assignedTo: 'Priya Sharma',
      usageCount: 12,
      maxUsage: 50,
      expiryDate: '2024-12-31',
      isActive: true
    },
    {
      id: '2',
      code: 'WELCOME20',
      discountType: 'percentage',
      discountValue: 20,
      assignedTo: 'Marketing Team',
      usageCount: 45,
      maxUsage: 100,
      expiryDate: '2024-06-30',
      isActive: true
    },
    {
      id: '3',
      code: 'EARLYBIRD500',
      discountType: 'fixed',
      discountValue: 500,
      assignedTo: 'Rajesh Kumar',
      usageCount: 8,
      maxUsage: 20,
      expiryDate: '2024-03-15',
      isActive: false
    }
  ]);
  
  const handleAddCoupon = () => {
    // Validate coupon
    if (!newCoupon.code) {
      toast({
        title: "Error",
        description: "Coupon code is required",
        variant: "destructive"
      });
      return;
    }
    
    if (newCoupon.discountValue <= 0) {
      toast({
        title: "Error",
        description: "Discount value must be greater than 0",
        variant: "destructive"
      });
      return;
    }
    
    if (newCoupon.discountType === 'percentage' && newCoupon.discountValue > 100) {
      toast({
        title: "Error",
        description: "Percentage discount cannot exceed 100%",
        variant: "destructive"
      });
      return;
    }
    
    const newCouponWithId: Coupon = {
      ...newCoupon,
      id: (coupons.length + 1).toString(),
      usageCount: 0
    };
    
    setCoupons([...coupons, newCouponWithId]);
    
    // Reset form
    setNewCoupon({
      code: '',
      discountType: 'percentage',
      discountValue: 10,
      assignedTo: '',
      maxUsage: null,
      expiryDate: null,
      isActive: true
    });
    
    toast({
      title: "Success",
      description: `Coupon ${newCouponWithId.code} has been created`,
      variant: "default"
    });
  };
  
  const toggleCouponStatus = (id: string) => {
    setCoupons(coupons.map(coupon => {
      if (coupon.id === id) {
        const updatedCoupon = { ...coupon, isActive: !coupon.isActive };
        
        toast({
          title: updatedCoupon.isActive ? "Coupon Activated" : "Coupon Deactivated",
          description: `${coupon.code} has been ${updatedCoupon.isActive ? 'activated' : 'deactivated'}`,
          variant: "default"
        });
        
        return updatedCoupon;
      }
      return coupon;
    }));
  };
  
  const deleteCoupon = (id: string) => {
    const couponToDelete = coupons.find(coupon => coupon.id === id);
    
    setCoupons(coupons.filter(coupon => coupon.id !== id));
    
    toast({
      title: "Coupon Deleted",
      description: `${couponToDelete?.code} has been deleted`,
      variant: "default"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-2">Coupon Management</h1>
          <p className="text-gray-600 mb-8">Create and manage referral coupons for your workshops</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="shadow-md bg-white border-0">
                <CardHeader>
                  <CardTitle>All Coupons</CardTitle>
                </CardHeader>
                <CardContent>
                  {coupons.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No coupons created yet</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4">Coupon Code</th>
                            <th className="text-left py-3 px-4">Discount</th>
                            <th className="text-left py-3 px-4">Assigned To</th>
                            <th className="text-left py-3 px-4">Usage</th>
                            <th className="text-left py-3 px-4">Expiry</th>
                            <th className="text-left py-3 px-4">Status</th>
                            <th className="text-left py-3 px-4">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {coupons.map((coupon) => (
                            <tr key={coupon.id} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="py-3 px-4 font-medium">{coupon.code}</td>
                              <td className="py-3 px-4">
                                {coupon.discountType === 'percentage' 
                                  ? `${coupon.discountValue}%` 
                                  : `₹${coupon.discountValue}`}
                              </td>
                              <td className="py-3 px-4">{coupon.assignedTo}</td>
                              <td className="py-3 px-4">
                                {coupon.usageCount}
                                {coupon.maxUsage && ` / ${coupon.maxUsage}`}
                              </td>
                              <td className="py-3 px-4">
                                {coupon.expiryDate 
                                  ? new Date(coupon.expiryDate).toLocaleDateString('en-IN') 
                                  : 'No expiry'}
                              </td>
                              <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  coupon.isActive 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {coupon.isActive ? 'Active' : 'Inactive'}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center space-x-2">
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-8 w-8 p-0" 
                                    onClick={() => toggleCouponStatus(coupon.id)}
                                  >
                                    {coupon.isActive ? (
                                      <X className="h-4 w-4 text-gray-500" />
                                    ) : (
                                      <Check className="h-4 w-4 text-green-500" />
                                    )}
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50" 
                                    onClick={() => deleteCoupon(coupon.id)}
                                  >
                                    <Trash className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="shadow-md bg-white border-0">
                <CardHeader>
                  <CardTitle>Create New Coupon</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="couponCode">Coupon Code</Label>
                      <Input 
                        id="couponCode" 
                        placeholder="e.g., WELCOME20" 
                        value={newCoupon.code}
                        onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="discountType">Discount Type</Label>
                        <Select 
                          value={newCoupon.discountType} 
                          onValueChange={(value: 'percentage' | 'fixed') => 
                            setNewCoupon({ ...newCoupon, discountType: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="percentage">Percentage (%)</SelectItem>
                              <SelectItem value="fixed">Fixed Amount (₹)</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="discountValue">
                          {newCoupon.discountType === 'percentage' ? 'Percentage (%)' : 'Amount (₹)'}
                        </Label>
                        <Input 
                          id="discountValue" 
                          type="number" 
                          min={1} 
                          max={newCoupon.discountType === 'percentage' ? 100 : undefined} 
                          value={newCoupon.discountValue}
                          onChange={(e) => setNewCoupon({ 
                            ...newCoupon, 
                            discountValue: parseInt(e.target.value) || 0 
                          })}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="assignedTo">Assigned To (POC)</Label>
                      <Input 
                        id="assignedTo" 
                        placeholder="e.g., Marketing Team" 
                        value={newCoupon.assignedTo}
                        onChange={(e) => setNewCoupon({ ...newCoupon, assignedTo: e.target.value })}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="maxUsage">Max Usage (optional)</Label>
                      <Input 
                        id="maxUsage" 
                        type="number" 
                        min={1} 
                        placeholder="Leave empty for unlimited" 
                        value={newCoupon.maxUsage || ''}
                        onChange={(e) => setNewCoupon({ 
                          ...newCoupon, 
                          maxUsage: e.target.value ? parseInt(e.target.value) : null
                        })}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date (optional)</Label>
                      <div className="relative">
                        <Input 
                          id="expiryDate" 
                          type="date" 
                          value={newCoupon.expiryDate || ''}
                          min={new Date().toISOString().split('T')[0]} 
                          onChange={(e) => setNewCoupon({ ...newCoupon, expiryDate: e.target.value || null })}
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-2 bg-blue-600 hover:bg-blue-700"
                      onClick={handleAddCoupon}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Create Coupon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CouponManagement;
